using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ElenCensus.Class
{
    public class BarChart
    {
        public string XAxis { get; set; }
        public string YAxis { get; set; }

        public List<(string, int)> barData;
    }
}
