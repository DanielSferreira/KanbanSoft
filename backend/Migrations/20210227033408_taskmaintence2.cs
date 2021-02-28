using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KanbanSoft.Migrations
{
    public partial class taskmaintence2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "taskTracks");

            migrationBuilder.RenameColumn(
                name: "Date",
                table: "tasks",
                newName: "TrackDate");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateRelease",
                table: "tasks",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DeliveryDate",
                table: "tasks",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "IdUser",
                table: "tasks",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateRelease",
                table: "tasks");

            migrationBuilder.DropColumn(
                name: "DeliveryDate",
                table: "tasks");

            migrationBuilder.DropColumn(
                name: "IdUser",
                table: "tasks");

            migrationBuilder.RenameColumn(
                name: "TrackDate",
                table: "tasks",
                newName: "Date");

            migrationBuilder.CreateTable(
                name: "taskTracks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    DeliveryDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    IdTask = table.Column<int>(type: "int", nullable: false),
                    IdUser = table.Column<int>(type: "int", nullable: false),
                    TrackDate = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_taskTracks", x => x.Id);
                });
        }
    }
}
