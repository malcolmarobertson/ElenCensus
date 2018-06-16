using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ElenCensus.Models;
using Microsoft.EntityFrameworkCore;
using ElenCensus.Class;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ElenCensus.Controllers
{
    [Route("api/StatisticData")]
    public class StatisticDataController : Controller
    {
        ElenCensusContext db = new ElenCensusContext();

        [HttpGet]
        [Route("GenderStats")]
        public BarChart GenderStats()
        {
            BarChart bc = new BarChart
            {
                XAxis = "Gender",
                YAxis = "Population",
                barData = new List<(string, int)>()
            };
            bc.barData.Add((gender: "Male", count: db.PersonalInfo.Where(w => w.Gender == "Male").Count()));
            bc.barData.Add((gender: "Female", count: db.PersonalInfo.Where(w => w.Gender == "Female").Count()));
            bc.barData.Add((gender: "Not Specified", count: db.PersonalInfo.Where(w => w.Gender != "Male" && w.Gender != "Female").Count()));

            return bc;
        }

        [HttpGet]
        [Route("CrimeStats")]
        public BarChart CrimeStats()
        {
            BarChart bc = new BarChart
            {
                XAxis = "Crime",
                YAxis = "Incidents",
                barData = new List<(string, int)>()
            };

            var cc = db.CrimeCount
                .FromSql("EXECUTE dbo.[uspGetCrimeCountTotal]")
                .ToList();

            foreach (var c in cc)
            {
                bc.barData.Add((c.Crime, c.Count));
            }

            return bc;

        }
    }
}
