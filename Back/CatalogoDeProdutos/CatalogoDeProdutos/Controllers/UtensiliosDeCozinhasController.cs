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
    public class UtensiliosDeCozinhasController : ControllerBase
    {
        private readonly TodoContext _context;

        public UtensiliosDeCozinhasController(TodoContext context)
        {
            _context = context;
        }

        // GET: api/UtensiliosDeCozinhas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UtensiliosDeCozinha>>> GetUtensiliosDeCozinhas()
        {
            return await _context.UtensiliosDeCozinhas.ToListAsync();
        }

        // GET: api/UtensiliosDeCozinhas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UtensiliosDeCozinha>> GetUtensiliosDeCozinha(long id)
        {
            var utensiliosDeCozinha = await _context.UtensiliosDeCozinhas.FindAsync(id);

            if (utensiliosDeCozinha == null)
            {
                return NotFound();
            }

            return utensiliosDeCozinha;
        }

        // PUT: api/UtensiliosDeCozinhas/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUtensiliosDeCozinha(long id, UtensiliosDeCozinha utensiliosDeCozinha)
        {
            if (id != utensiliosDeCozinha.Id)
            {
                return BadRequest();
            }

            _context.Entry(utensiliosDeCozinha).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UtensiliosDeCozinhaExists(id))
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

        // POST: api/UtensiliosDeCozinhas
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<UtensiliosDeCozinha>> PostUtensiliosDeCozinha(UtensiliosDeCozinha utensiliosDeCozinha)
        {
            _context.UtensiliosDeCozinhas.Add(utensiliosDeCozinha);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUtensiliosDeCozinha), new { id = utensiliosDeCozinha.Id }, utensiliosDeCozinha);
            
        }

        // DELETE: api/UtensiliosDeCozinhas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UtensiliosDeCozinha>> DeleteUtensiliosDeCozinha(long id)
        {
            var utensiliosDeCozinha = await _context.UtensiliosDeCozinhas.FindAsync(id);
            if (utensiliosDeCozinha == null)
            {
                return NotFound();
            }

            _context.UtensiliosDeCozinhas.Remove(utensiliosDeCozinha);
            await _context.SaveChangesAsync();

            return utensiliosDeCozinha;
        }

        private bool UtensiliosDeCozinhaExists(long id)
        {
            return _context.UtensiliosDeCozinhas.Any(e => e.Id == id);
        }
    }
}
