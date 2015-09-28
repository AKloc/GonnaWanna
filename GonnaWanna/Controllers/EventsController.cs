using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using GonnaWanna.Models;

namespace GonnaWanna.Controllers
{
    public class EventsController : ApiController
    {
        [HttpGet]
        [Route("api/events/")]
        public IHttpActionResult Get()
        {
            using (Contexts.GonnaWannaContext ctx = new Contexts.GonnaWannaContext())
            {
                var query = ctx.Events
                    .Include(e => e.Location)
                    .Include(e => e.ChannelMemberships.Select(cm => cm.Channel))
                    //.Include(e => e.)
                    .ToList();

                return Ok(query);
            }
            
        }
        
        [HttpGet]
        [Route("api/events/{id}")]
        public IHttpActionResult Get(int id)
        {
            using (Contexts.GonnaWannaContext ctx = new Contexts.GonnaWannaContext())
            {
                //var query = from e in ctx.Events
                //         select e;


                var query = ctx.Events
                .Include(e => e.Location)
                .Include(e => e.ChannelMemberships.Select(cm => cm.Channel))
                //.Include(e => e.)
                .FirstOrDefault((e) => e.ID == id); 
                
                if (query == null)
                {
                    return NotFound();
                }

                return Ok(query);
            }
        }
    }
}
