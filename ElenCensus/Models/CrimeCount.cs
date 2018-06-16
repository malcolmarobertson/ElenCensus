using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ElenCensus.Models
{
    public class CrimeCount
    {
        [Key]
        public string Crime { get; set; }

        public int Count { get; set; }

    }
}
