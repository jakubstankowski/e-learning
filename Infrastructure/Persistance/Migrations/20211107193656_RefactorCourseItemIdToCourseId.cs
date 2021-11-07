using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Persistance.Migrations
{
    public partial class RefactorCourseItemIdToCourseId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ItemOrdered_CourseItemId",
                table: "OrderItems",
                newName: "ItemOrdered_CourseId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ItemOrdered_CourseId",
                table: "OrderItems",
                newName: "ItemOrdered_CourseItemId");
        }
    }
}
