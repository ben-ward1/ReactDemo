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
                // simple http GET
                var url = "https://swapi.co/api/people/" + RequestHelper.GetInt(1, 15).ToString() + "/?format=json";
                var response = client.DownloadString(url);

                return response;
            }
        }

        public string GetDescription(int index)
        {
            var DescHelper = new DescriptionHelper();

            switch(index)
            {
                case 0:
                    return DescHelper.PageDescription;
                case 1:
                    return DescHelper.SWComponentDescription;
                case 2:
                    return DescHelper.WeatherComponentDescription;
                case 3:
                    return DescHelper.DaxkoMsg;
                default:
                    return "Something went wrong.";
            }
        }
    }
}