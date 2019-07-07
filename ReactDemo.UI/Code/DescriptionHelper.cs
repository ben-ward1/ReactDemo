using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace ReactDemo.UI.Code
{
    internal class DescriptionHelper
    {
        public string PageDescription { get; }
        public string SWComponentDescription { get; }
        public string WeatherComponentDescription { get; }

        public DescriptionHelper()
        {
            //this.PageDescription = HttpUtility.HtmlEncode("<b>Thanks for taking a look at my app!</b> It's a single page that demonstrates what I learned after trying React.js for the first time 3 days ago. The two components here are the Star Wars profile table and the Weather forecast. I followed a demo for the weather component and crafted the SW profile and description components myself. The biggest challenge was the initial setup. It took a full day to learn/figure out node.js, npm, webpack, babel, bundling and how to configure it all before I could even begin to create React components. Click on the description buttons to see more details about each component. -Ben Ward");
            this.PageDescription = "<p><b>Thanks for taking a look at my app!</b> It's a single page that demonstrates what I learned after trying React.js for the first time 3 days ago. The two main components here are the Star Wars profile table and the Weather forecast. I followed a demo for the weather component and crafted the SW profile and description components myself.</p> <p>The biggest challenge was the initial setup. It took a full day to learn/figure out node.js, npm, webpack, babel, bundling and how to configure it all before I could even begin to create React components. Click on the description buttons to see more details about each component.</p> -Ben Ward";
            this.SWComponentDescription = "This component gets a random Star Wars character's profile from a publicly available web api (see link below). It works by calling a controller method from the server which in turn calls a web api and hands the response to the React component. Inspect the DOM tree in the developer tools while clicking the &#39;Get another profile&#39; button to see React updating only the elements that change.";
            this.WeatherComponentDescription = "This component is similar to the one above, but the data originates from within the application (hardcoded for demonstration purposes). Notice that this component refreshes more quickly than the one above after clicking the button. As with the other component, inspect the DOM tree while clicking the button to see React update only the elements that change.";
        }
    }
}
