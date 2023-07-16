using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using DemoMVC.Models;


namespace DemoMVC.Controllers
{
    public class AuthController : Controller
    {
        // GET: Auth
        punedbEntities1 ent= new punedbEntities1();   
        public ActionResult SignIn()
        {
            return View();
        }


        private bool ValidateUserFromDb(SBUser userSigningIn)
        {

           
           foreach(UserTable item in ent.UserTables.ToList()) {

                if (item.Username == userSigningIn.UserName && item.Password == item.Password)
                {
                    return true;
                }

            }
            return false;

        }
        

        [HttpPost]
        public ActionResult AfterSignIn(SBUser UserSigningIn, string ReturnUrl)
        {
            if (ValidateUserFromDb(UserSigningIn))
            {
                ViewBag.Message= "Welcome" + User.Identity.Name;
                FormsAuthentication.SetAuthCookie(UserSigningIn.UserName, false);

                if (ReturnUrl != null)
                {
                    return Redirect(ReturnUrl);
                }
                else
                {
                    return Redirect("/Demo/Index");
                }
            }
            else
            {
                ViewBag.Message= "User name / password is wrong!";
                return View("SignIn");

            }


        }
        public ActionResult Signout()
        {
            FormsAuthentication.SignOut();
            return Redirect("/Demo/Index");
        }
    }
}