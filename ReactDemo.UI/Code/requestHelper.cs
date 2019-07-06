using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactDemo.UI.Code
{
    static internal class RequestHelper
    {
        static internal int GetInt(int min, int max)
        {
            var rnd = new Random();

            var vals = Enumerable.Range(1, 20).ToArray();

            return vals[rnd.Next(min, max)];
        }
    }
}
