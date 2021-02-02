using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Persistance.Migrations
{
    public partial class AddOrderAggregate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItems_CourseItemOrdered_ItemOrderedId",
                table: "OrderItems");

            migrationBuilder.DropTable(
                name: "CourseItemOrdered");

            migrationBuilder.DropIndex(
                name: "IX_OrderItems_ItemOrderedId",
                table: "OrderItems");

            migrationBuilder.RenameColumn(
                name: "ItemOrderedId",
                table: "OrderItems",
                newName: "ItemOrdered_CourseItemId");

            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "Orders",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "ItemOrdered_CourseTitle",
                table: "OrderItems",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ItemOrdered_CourseTitle",
                table: "OrderItems");

            migrationBuilder.RenameColumn(
                name: "ItemOrdered_CourseItemId",
                table: "OrderItems",
                newName: "ItemOrderedId");

            migrationBuilder.AlterColumn<int>(
                name: "Status",
                table: "Orders",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateTable(
                name: "CourseItemOrdered",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CourseItemId = table.Column<int>(type: "int", nullable: false),
                    CourseTitle = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CourseItemOrdered", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_ItemOrderedId",
                table: "OrderItems",
                column: "ItemOrderedId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItems_CourseItemOrdered_ItemOrderedId",
                table: "OrderItems",
                column: "ItemOrderedId",
                principalTable: "CourseItemOrdered",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
