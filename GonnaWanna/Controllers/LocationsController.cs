﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using GonnaWanna.Models;

namespace GonnaWanna.Controllers
{
    public class LocationsController : ApiController
    {
        [HttpGet]
        [Route("api/locations/")]
        public IHttpActionResult Get()
        {
            using (Contexts.GonnaWannaContext ctx = new Contexts.GonnaWannaContext())
            {
                var query = ctx.Locations
                    .Include(l => l.Events)
                    //.Include(e => e.)
                    .ToList();

                return Ok(query);
            }

        }

        [HttpGet]
        [Route("api/locations/{id}")]
        public IHttpActionResult Get(int id)
        {
            using (Contexts.GonnaWannaContext ctx = new Contexts.GonnaWannaContext())
            {
                var query = ctx.Locations
                .Include(l => l.Events)
                //.Include(e => e.)
                .FirstOrDefault((l) => l.ID == id);
                

                if (query == null)
                {
                    return NotFound();
                }

                return Ok(query);
            }
        }
    }
}
