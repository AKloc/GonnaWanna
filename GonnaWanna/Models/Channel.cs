using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GonnaWanna.Models
{
    class Channel
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string CreatedByUser { get; set; }
        public DateTime? CreatedByUserOnDate { get; set; }
        public string LastEdditedByUser { get; set; }
        public DateTime? LastEdittedByUserOnDate { get; set; }
        public bool IsActive { get; set; }

        //public virtual ICollection<Event> Events { get; set; }
        public virtual ICollection<ChannelMembership> ChannelMemberships { get; set; }

        //Created By?
        //Last Editted By?
    }
}
