using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using GonnaWanna.Models;
using System.Data.Entity.Validation;

namespace GonnaWanna.Controllers
{
    public class ChannelsController : ApiController
    {
        [HttpGet]
        [Route("api/channels/")]
        public IHttpActionResult Get()
        {
            using (Contexts.GonnaWannaContext ctx = new Contexts.GonnaWannaContext())
            {
                var query = ctx.Channels
                    .Include(c => c.ChannelMemberships.Select(cm => cm.Event))
                    //.Include(e => e.)
                    .ToList();


                return Ok(query);
            }

        }

        [HttpGet]
        [Route("api/channels/{id}")]
        public IHttpActionResult Get(int id)
        {
            using (Contexts.GonnaWannaContext ctx = new Contexts.GonnaWannaContext())
            {
                
                var query = ctx.Channels
                //.Include(c => c.)
                .Include(c => c.ChannelMemberships.Select(cm => cm.Event))
                .Include(c => c.ChannelMemberships.Select(cm => cm.Event.Location))

                //.Include(e => e.)
                .FirstOrDefault((c) => c.ID == id);

                if (query == null)
                {
                    return NotFound();
                }

                return Ok(query);
            }
        }
    }
}
