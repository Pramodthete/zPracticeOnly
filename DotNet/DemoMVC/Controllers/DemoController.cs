using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DemoMVC.Models;
using DemoMVC.filter;
using DemoMVC.Logger;

namespace DemoMVC.Controllers
{
    public class DemoController : BaseController
    {
        
        punedbEntities1 modelObj = new punedbEntities1();


        // GET: Demo
        [SBFilter]
        public ActionResult Index()
        {
            List<Emp> emplist= modelObj.Emps.ToList();

            return View("Index",emplist);
        }
        

        public ActionResult Edit(int id)
        {
            Emp emp = modelObj.Emps.Find(id);
            return View(emp);
        }

        [HttpPost]
        public ActionResult Edit(Emp updateEmp) 
        {
            Emp empToBeEdited = modelObj.Emps.Find(updateEmp.No);
            empToBeEdited.Name = updateEmp.Name;
            empToBeEdited.Address = updateEmp.Address;
            modelObj.SaveChanges();
            return Redirect("/Demo/Index");
        }
        public ActionResult Delete(int id)
        {
            Emp empToBeRemoved = modelObj.Emps.Find(id);
            modelObj.Emps.Remove(empToBeRemoved);
            modelObj.SaveChanges();
            return Redirect("/Demo/Index");
        }
        public ActionResult Create()
        {
            return View();
        }

        public ActionResult AfterCreate (Emp empAdded)
        {

            modelObj.Emps.Add(empAdded);
            modelObj.SaveChanges();
            return Redirect("/Demo/Index");
        }

    }
}