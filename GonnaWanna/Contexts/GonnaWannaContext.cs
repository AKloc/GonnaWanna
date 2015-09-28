using GonnaWanna.Models;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace GonnaWanna.Contexts
{
    class GonnaWannaContext : DbContext
    {
        public GonnaWannaContext() : base("GonnaWannaContextDBConnection")
        {
            //Do nothing, just pass in the database connection to the DbContext parent class.
        }


        public static GonnaWannaContext Create()
        {
            return new GonnaWannaContext();
        }

        public DbSet<Event> Events { get; set; }
        public DbSet<Channel> Channels { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<ChannelMembership> ChannelMemberships { get; set; }
    }



}
