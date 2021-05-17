using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Persistance.Migrations
{
    public partial class RemoveApplicationUserFromContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserCourses_AspNetUsers_ApplicationUserId",
                table: "UserCourses");

            migrationBuilder.RenameColumn(
                name: "ApplicationUserId",
                table: "UserCourses",
                newName: "IdentityUserId");

            migrationBuilder.RenameIndex(
                name: "IX_UserCourses_ApplicationUserId",
                table: "UserCourses",
                newName: "IX_UserCourses_IdentityUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserCourses_AspNetUsers_IdentityUserId",
                table: "UserCourses",
                column: "IdentityUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserCourses_AspNetUsers_IdentityUserId",
                table: "UserCourses");

            migrationBuilder.RenameColumn(
                name: "IdentityUserId",
                table: "UserCourses",
                newName: "ApplicationUserId");

            migrationBuilder.RenameIndex(
                name: "IX_UserCourses_IdentityUserId",
                table: "UserCourses",
                newName: "IX_UserCourses_ApplicationUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserCourses_AspNetUsers_ApplicationUserId",
                table: "UserCourses",
                column: "ApplicationUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
