using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CodeProjectMVCAngularTutorial.Startup))]
namespace CodeProjectMVCAngularTutorial
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
