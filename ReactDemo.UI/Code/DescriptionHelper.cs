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
        public string DaxkoMsg { get; }

        public DescriptionHelper()
        {
            // Description HTML strings hardcoded into contructor strictly for demonstration purposes.
            this.PageDescription = "<div style='font-size:15px'><p><b>Thanks for taking a look at my app!</b> It's a single page that demonstrates what I learned after trying React.js for the first time 3 days ago. The two main components here are the Star Wars profile table and the Weather forecast. I followed a demo for the weather component, then crafted the SW profile and description components myself.</p><p>The biggest challenge was the initial setup. It took a full day to learn/figure out node.js, npm, webpack, babel, bundling and how to configure it all before I could even begin to create React components. Click on the description buttons to see more details about each component.</p><section><label style='margin-bottom:2px'>Technical caveats: </label><ul><li>This app was not designed with regard to mobile responsiveness.</li><li>The page was purposefully designed for demonstration purposes to fetch almost all data from the server/webAPI in response to click events (even these description messages are fetched from the server with each corresponding click event).</li></ul></section></div>";
            this.SWComponentDescription = "<p><b>What: </b>This component gets a random Star Wars character's profile from a publicly available web api (see link below).</p><p><b>How: </b>It works by calling a controller method from the server which in turn calls a web api and hands the response to the React component. Inspect the DOM tree in the developer tools while clicking the &#39;Get another profile&#39; button to see React updating only the elements that change.</p>";
            this.WeatherComponentDescription = "<p><b>What: </b>This component gives a randomized weather forecast for the next five days</p><p><b>How: </b>Works similarly to the other component, but the data originates from within the application (hardcoded for demonstration purposes). Notice that this component refreshes more quickly than the one above after clicking the button. As with the other component, inspect the DOM tree while clicking the refresh button to see React update only the elements that change.</p>";
            this.DaxkoMsg = "<div style='font-size:13px'><p style='margin-bottom:5px'>Thanks again for the time you all have taken in considering me to join your organization. In return for your consideration, I created this page to demonstrate to you my willingness and ability to learn a new technology (React). This page is written almost entirely in react, which I picked up for the first time a few days ago.</p><p style='margin-bottom:0px'>While working on this demo, some of the topics I touched include: </p><ul style='margin-bottom:5px'><li>node.js</li><li>npm, plugins, loaders</li><li>js modules, bundles, & distribution</li><li>webpack (bundling) & babel (transpilation)</li><li>ReactDOM, React components, state, & rendering</li></ul><p>Looking forward, I am interested in learning more about React libraries, how to leverage component reuse, and how to manage & distribute bundles more effectively. Now that I've caught React fever, I expect learn how to do more and accomplish it more efficiently than I have here. I hope this was a useful demonstration and look forward to a future opportunity with Daxko!</p><p>Hopeful Daxko SWE,</br>-Ben Ward</p></div>";
        }
    }
}
