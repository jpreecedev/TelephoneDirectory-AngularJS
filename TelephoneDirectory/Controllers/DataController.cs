namespace TelephoneDirectory.Controllers
{
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web.Http;

    using Models;

    public class DataController : ApiController
    {
        #region Public Methods and Operators

        public void Delete(int id)
        {
            using (DataContext context = new DataContext())
            {
                TelephoneEntry entity = context.TelephoneEntries.FirstOrDefault(t => t.Id == id);
                if (entity != null)
                {
                    context.Entry(entity).State = EntityState.Deleted;
                }

                context.SaveChanges();
            }
        }

        public async Task<IEnumerable<TelephoneEntry>> Get()
        {
            using (DataContext context = new DataContext())
            {
                return await context.TelephoneEntries.ToListAsync();
            }
        }

        public async Task<TelephoneEntry> Post([FromBody]TelephoneEntry telephoneEntry)
        {
            using (DataContext context = new DataContext())
            {
                if (telephoneEntry.Id == 0)
                {
                    context.Entry(telephoneEntry).State = EntityState.Added;
                }
                else
                {
                    context.Entry(telephoneEntry).State = EntityState.Modified;
                }

                await context.SaveChangesAsync();
                return telephoneEntry;
            }
        }

        #endregion
    }
}