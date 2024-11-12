namespace LibrasyncAPI.Repository.Interfaces
{
    using LibrasyncAPI.Entity;

    public interface IBookRepository
    {
        Task<IEnumerable<BookEntity>> GetAll();

        Task<BookEntity?> GetById(int id);

        Task Add(BookEntity entity);

        Task Update(BookEntity entity);

        Task Delete(int id);
    }
}
