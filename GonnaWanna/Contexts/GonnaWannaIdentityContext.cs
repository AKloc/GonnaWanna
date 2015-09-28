using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using GonnaWanna.Models;

namespace GonnaWanna.Contexts
{
    class GonnaWannaIdentityContext : IdentityDbContext<ApplicationUser>
    {
        
            public GonnaWannaIdentityContext() : base("GonnaWannaContextDBConnection", throwIfV1Schema: false)
            {
            }

            public static GonnaWannaIdentityContext Create()
            {
                return new GonnaWannaIdentityContext();
            }
        
    }
}
