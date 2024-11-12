using LibrasyncAPI.Entity;
using LibrasyncAPI.Repository.Interfaces;
using LibrasyncAPI.Service.Interfaces;

namespace LibrasyncAPI.Service
{
    public class BookService : IBookService
    {
        private readonly IBookRepository _bookRepository;

        public BookService(IBookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }

        public async Task AddAsync(BookEntity newEntity)
        {
            await _bookRepository.Add(newEntity);
        }

        public async Task DeleteAsync(int id)
        {
            await _bookRepository.Delete(id);
        }

        public async Task<IEnumerable<BookEntity>> GetAllAsync()
        {
            return await _bookRepository.GetAll();
        }

        public async Task<BookEntity?> GetByIdAsync(int id)
        {
            return await _bookRepository.GetById(id);
        }

        public async Task UpdateAsync(BookEntity newEntity)
        {
            await _bookRepository.Update(newEntity);
        }
    }
}
