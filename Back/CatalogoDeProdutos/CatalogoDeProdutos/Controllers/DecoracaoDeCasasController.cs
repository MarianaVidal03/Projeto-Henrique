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
    public class DecoracaoDeCasasController : ControllerBase
    {
        private readonly TodoContext _context;

        public DecoracaoDeCasasController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/DecoracaoDeCasas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DecoracaoDeCasa>>> GetDecoracaoDeCasas()
        {
            return await _context.DecoracaoDeCasas.ToListAsync();
        }

        // GET: api/DecoracaoDeCasas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DecoracaoDeCasa>> GetDecoracaoDeCasa(long id)
        {
            var decoracaoDeCasa = await _context.DecoracaoDeCasas.FindAsync(id);

            if (decoracaoDeCasa == null)
            {
                return NotFound();
            }

            return decoracaoDeCasa;
        }

        // PUT: api/DecoracaoDeCasas/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDecoracaoDeCasa(long id, DecoracaoDeCasa decoracaoDeCasa)
        {
            if (id != decoracaoDeCasa.Id)
            {
                return BadRequest();
            }

            _context.Entry(decoracaoDeCasa).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DecoracaoDeCasaExists(id))
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

        // POST: api/DecoracaoDeCasas
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<DecoracaoDeCasa>> PostDecoracaoDeCasa(DecoracaoDeCasa decoracaoDeCasa)
        {
            _context.DecoracaoDeCasas.Add(decoracaoDeCasa);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetDecoracaoDeCasa), new { id = decoracaoDeCasa.Id }, decoracaoDeCasa);
      
        }

        // DELETE: api/DecoracaoDeCasas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DecoracaoDeCasa>> DeleteDecoracaoDeCasa(long id)
        {
            var decoracaoDeCasa = await _context.DecoracaoDeCasas.FindAsync(id);
            if (decoracaoDeCasa == null)
            {
                return NotFound();
            }

            _context.DecoracaoDeCasas.Remove(decoracaoDeCasa);
            await _context.SaveChangesAsync();

            return decoracaoDeCasa;
        }

        private bool DecoracaoDeCasaExists(long id)
        {
            return _context.DecoracaoDeCasas.Any(e => e.Id == id);
        }
    }
}
