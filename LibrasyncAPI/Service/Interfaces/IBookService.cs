namespace LibrasyncAPI.Service.Interfaces
{
    using LibrasyncAPI.Entity;

    public interface IBookService
    {
        Task<IEnumerable<BookEntity>> GetAllAsync();

        Task<BookEntity?> GetByIdAsync(int id);

        Task AddAsync(BookEntity newEntity);

        Task UpdateAsync(BookEntity newEntity);

        Task DeleteAsync(int id);
    }
}
