using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Persistance.Migrations
{
    public partial class UserIdToOrder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BuyerId",
                table: "Orders",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BuyerId",
                table: "Orders");
        }
    }
}
