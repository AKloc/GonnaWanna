﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GonnaWanna.Models
{
    class Event
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int LocationID { get; set; }
        public string ImageUrl { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string CreatedByUser { get; set; }
        public DateTime? CreatedByUserOnDate { get; set; }        
        public string LastEdditedByUser { get; set; }
        public DateTime? LastEdittedByUserOnDate { get; set; }
        public bool IsActive { get; set; }

        public virtual Location Location { get; set; }
        public virtual ICollection<ChannelMembership> ChannelMemberships { get; set; }

    }
}
