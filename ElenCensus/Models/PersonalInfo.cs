using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ElenCensus.Models
{
    public partial class PersonalInfo
    {
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        [Key]
        public int PersonalInfoID { get; set; }
        public string IDNumber { get; set; }
        public byte? Age { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public string AddressLine1 { get; set; }
        public string AddressLine2 { get; set; }
        public string AddressLine3 { get; set; }
        public string AddressLine4 { get; set; }
        public string Province { get; set; }
        public string Gender { get; set; }
        public string Title { get; set; }
        public string MaritalStatus { get; set; }
        public string Race { get; set; }
        public string CountryOfBirth { get; set; }
        public string Religion { get; set; }

    }
}
