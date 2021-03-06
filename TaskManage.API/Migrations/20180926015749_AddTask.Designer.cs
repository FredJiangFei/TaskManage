﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using TaskManage.API.Data;

namespace TaskManage.API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20180926015749_AddTask")]
    partial class AddTask
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.3-rtm-32065");

            modelBuilder.Entity("Task", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Completed");

                    b.Property<DateTime>("Created");

                    b.Property<string>("Description");

                    b.Property<DateTime>("DueDate");

                    b.Property<int>("LineId");

                    b.Property<int>("Order");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.HasIndex("LineId");

                    b.ToTable("Tasks");
                });

            modelBuilder.Entity("TaskLine", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Created");

                    b.Property<int>("Order");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.ToTable("TaskLines");
                });

            modelBuilder.Entity("User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Avatar");

                    b.Property<DateTime>("Birthday");

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Task", b =>
                {
                    b.HasOne("TaskLine", "Line")
                        .WithMany("Tasks")
                        .HasForeignKey("LineId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
