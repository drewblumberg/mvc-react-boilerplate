using Microsoft.EntityFrameworkCore;
using MvcTypescriptBoilerplate.Models;

namespace MvcTypescriptBoilerplate.Data
{
    public class MvcTypescriptBoilerplateContext : DbContext
    {
        public MvcTypescriptBoilerplateContext (DbContextOptions<MvcTypescriptBoilerplateContext> options)
            : base(options)
        {
        }

        public DbSet<User> User { get; set; }
    }
}