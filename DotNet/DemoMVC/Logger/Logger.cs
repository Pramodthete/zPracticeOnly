using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;

namespace DemoMVC.Logger
{
    public class SBLogger
    {
        private static SBLogger logger = new SBLogger();

        private SBLogger() { }

        public static SBLogger CurrentLogger
        {
            get
            {
                return logger;
            }
        }


        public void Log(string message)
        {
            string filepath = ConfigurationManager.AppSettings["logFilePath"].ToString();

            FileStream fs = null;

            if (File.Exists(filepath))
            {
                fs = new FileStream(filepath, FileMode.Append, FileAccess.Write);
            }
            else
            {
                fs = new FileStream(filepath, FileMode.Create, FileAccess.Write);
            }

            StreamWriter writer = new StreamWriter(fs);
            writer.WriteLine(message);
            writer.Close();
            fs.Close();

           



        }
    }
}