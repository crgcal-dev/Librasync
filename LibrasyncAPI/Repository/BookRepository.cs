namespace LibrasyncAPI.Repository
{
    using LibrasyncAPI.Data;
    using LibrasyncAPI.Entity;
    using LibrasyncAPI.Repository.Interfaces;
    using Microsoft.EntityFrameworkCore;

    public class BookRepository : IBookRepository
    {
        private readonly AppDbContext _context;

        public BookRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<BookEntity>> GetAll()
        {
            return await _context.Books.ToListAsync();
        }

        public async Task<BookEntity?> GetById(int id)
        {
            return await _context.Books.FindAsync(id);
        }

        public async Task Add(BookEntity entity)
        {
            await _context.Books.AddAsync(entity);
            await _context.SaveChangesAsync();
        }


        public async Task Update(BookEntity entity)
        {
            _context.Books.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var result = await _context.Books.FindAsync(id);

            if (result != null)
            {
                _context.Books.Remove(result);
                await _context.SaveChangesAsync();
            }
        }
    }
}
