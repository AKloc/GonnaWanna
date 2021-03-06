﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GonnaWanna.Models
{
    class Location
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string AddrLine1 { get; set; }
        public string AddrLine2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public string PhoneNumber { get; set; }
        public string ImageUrl { get; set; }
        public string CreatedByUser { get; set; }
        public string CreatedByUserOnDate { get; set; }
        public string LastEdditedByUser { get; set; }
        public DateTime? LastEdittedByUserOnDate { get; set; }
        public bool IsActive { get; set; }

        public virtual ICollection<Event> Events { get; set; }

        //Created By?
        //Last Editted By?
    }
}
