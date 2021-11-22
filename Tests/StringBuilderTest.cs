using System;
using System.Text;
using Xunit;

namespace Tests
{
    public class StringBuilderTest
    {
        [Fact]
        public void Append_ForTwoStrings_ReturnsConcatenatedString()
        {
            StringBuilder sb = new StringBuilder();

            sb.Append("test")
               .Append("test2");

            string result = sb.ToString();


            Assert.Equal("testtest22", result);
        }
    }
}
