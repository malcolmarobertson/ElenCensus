using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ElenCensus.Models;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ElenCensus.Controllers
{
    [Route("api/PersonalInfo")]
    public class PersonalInfoController : Controller
    {
        ElenCensusContext db = new ElenCensusContext();
        PersonalInfo personalInfo = new PersonalInfo();

        [HttpGet]
        [Route("Index")]
        public IEnumerable<PersonalInfo> Index()
        {
            return db.PersonalInfo.ToList();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] PersonalInfo personalInfo)
        {
            db.Entry(personalInfo).State = EntityState.Added;
            db.PersonalInfo.Add(personalInfo);
            db.SaveChanges();
            return 1;
        }

        [HttpGet]
        [Route("Details/{idNumber}")]
        public PersonalInfo Details(string idNumber)
        {
            PersonalInfo personalInfo = db.PersonalInfo.FirstOrDefault(p => p.IDNumber == idNumber);
            if (personalInfo != null)
                personalInfo.Gender = personalInfo.Gender.TrimEnd(' ');
            return personalInfo;
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody]PersonalInfo personalInfo)
        {
            db.Entry(personalInfo).State = EntityState.Modified;
            db.SaveChanges();
            return 1;
        }

        [HttpDelete]
        [Route("Delete/{idNumber}")]
        public int Delete(int personalInfoID)
        {
            PersonalInfo personalInfo = db.PersonalInfo.Find(personalInfoID);
            db.PersonalInfo.Remove(personalInfo);
            db.SaveChanges();
            return 1;
        }

    }
}
