using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CatalogoDeProdutos.Models;

namespace CatalogoDeProdutos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoupasController : ControllerBase
    {
        private readonly TodoContext _context;

        public RoupasController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/Roupas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Roupa>>> GetRoupas()
        {
            return await _context.Roupas.ToListAsync();
        }

        // GET: api/Roupas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Roupa>> GetRoupa(long id)
        {
            var roupa = await _context.Roupas.FindAsync(id);

            if (roupa == null)
            {
                return NotFound();
            }

            return roupa;
        }

        // PUT: api/Roupas/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRoupa(long id, Roupa roupa)
        {
            if (id != roupa.Id)
            {
                return BadRequest();
            }

            _context.Entry(roupa).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoupaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Roupas
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Roupa>> PostRoupa(Roupa roupa)
        {
            _context.Roupas.Add(roupa);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetRoupa), new { id = roupa.Id }, roupa);
            
        }

        // DELETE: api/Roupas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Roupa>> DeleteRoupa(long id)
        {
            var roupa = await _context.Roupas.FindAsync(id);
            if (roupa == null)
            {
                return NotFound();
            }

            _context.Roupas.Remove(roupa);
            await _context.SaveChangesAsync();

            return roupa;
        }

        private bool RoupaExists(long id)
        {
            return _context.Roupas.Any(e => e.Id == id);
        }
    }
}
