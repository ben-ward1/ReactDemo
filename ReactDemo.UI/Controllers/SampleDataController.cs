using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ReactDemo.UI.Controllers
{
    /// <summary>
    /// All this code is jammed into the controller because that is the way it was done in the 
    /// demo I was initially following. If I was doing this for real, this data would come from
    /// a service or data access layer.
    /// </summary>
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rnd = new Random();

            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rnd.Next(-20, 55),
                Summary = Summaries[rnd.Next(Summaries.Length)]
            });
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }
            public int TemperatureF
            {
                get { return 32 + (int)(TemperatureC / 0.5556); }
            }
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}