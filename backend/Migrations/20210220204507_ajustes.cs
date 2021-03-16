using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KanbanSoft.Migrations
{
    public partial class ajustes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    name = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    email = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    pass = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    nick = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true),
                    role = table.Column<string>(type: "longtext CHARACTER SET utf8mb4", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "users");
        }
    }
}
