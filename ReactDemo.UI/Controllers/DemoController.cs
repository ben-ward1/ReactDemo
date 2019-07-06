using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactDemo.UI.Code;
using System.Net;

namespace ReactDemo.UI.Controllers
{
    public class DemoController : Controller
    {
        public string GetProfile()
        {
            using (var client = new WebClient())
            {
                var url = "https://swapi.co/api/people/" + RequestHelper.GetInt(1, 15).ToString() + "/?format=json";
                var json = client.DownloadString(url);

                return json;
            }
        }
    }
}