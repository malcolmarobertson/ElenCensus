using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ElenCensus.Models
{
    public partial class ElenCensusContext : DbContext
    {
        public virtual DbSet<PersonalInfo> PersonalInfo { get; set; }
        public virtual DbSet<CrimeCount> CrimeCount { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(@"Server=Enk-sql01.swh.mweb.co.za; Database=m5699140_aWare; User ID=m5699140_sysadmin; Password=Sysadm1!; MultipleActiveResultSets=true");
            }
        }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PersonalInfo>(entity =>
            {
                entity.HasKey(e => e.PersonalInfoID);

                entity.ToTable("cen_PersonalInfo");

                entity.Property(e => e.PersonalInfoID)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("PersonalInfoID");

                entity.Property(e => e.IDNumber)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

            });
        }
    }
}
