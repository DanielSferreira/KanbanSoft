using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KanbanSoft.Migrations
{
    public partial class taskmaintence : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "role",
                table: "tasks");

            migrationBuilder.RenameColumn(
                name: "title",
                table: "tasks",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "status",
                table: "tasks",
                newName: "Status");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "tasks",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "description",
                table: "tasks",
                newName: "Description");

            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "tasks",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "Level",
                table: "tasks",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "tasks");

            migrationBuilder.DropColumn(
                name: "Level",
                table: "tasks");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "tasks",
                newName: "title");

            migrationBuilder.RenameColumn(
                name: "Status",
                table: "tasks",
                newName: "status");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "tasks",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "tasks",
                newName: "description");

            migrationBuilder.AddColumn<string>(
                name: "role",
                table: "tasks",
                type: "longtext CHARACTER SET utf8mb4",
                nullable: true);
        }
    }
}
