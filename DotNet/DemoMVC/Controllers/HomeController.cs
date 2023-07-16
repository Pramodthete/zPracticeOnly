using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DemoMVC.Models;

namespace DemoMVC.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            Customer C = new Customer();

            C.Id = 1;
            C.Name = "Ruishikesh";

            C.Id = 2;
            C.Name = "Sanskriti";

            C.Id = 3;
            C.Name = "Jayesh";

            Student s= new Student(); 
            s.SId = 2;
            s.SName = "Amay";
            return View("index",C);
        }
        public ActionResult AfterIndex(FormCollection entireForm)
        /* public ActionResult AfterIndex(Customer updateCustomer)*/
        {
            

            Customer updateedCustomer = new Customer();
            updateedCustomer.Id = Convert.ToInt32(entireForm["Id"]);
            updateedCustomer.Name = entireForm["Name"];
            return null;
        }

    }

}