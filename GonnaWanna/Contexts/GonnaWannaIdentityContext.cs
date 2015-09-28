using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using GonnaWanna.Models;
using System.Data.Entity;

namespace GonnaWanna.Contexts
{
    class GonnaWannaIdentityContext : IdentityDbContext<ApplicationUser>
    {        
        public GonnaWannaIdentityContext() : base("GonnaWannaContextDBConnection", throwIfV1Schema: false)
        {

        }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public static GonnaWannaIdentityContext Create()
        {
            return new GonnaWannaIdentityContext();
        }
        
    }
}
