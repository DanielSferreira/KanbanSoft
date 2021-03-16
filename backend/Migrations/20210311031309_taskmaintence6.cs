using Microsoft.EntityFrameworkCore.Migrations;

namespace KanbanSoft.Migrations
{
    public partial class taskmaintence6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "score",
                table: "users",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "score",
                table: "users");
        }
    }
}
