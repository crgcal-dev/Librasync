namespace LibrasyncAPI.Controllers
{
    using LibrasyncAPI.Entity;
    using LibrasyncAPI.Service.Interfaces;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("api/[controller]")]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _bookService.GetAllAsync();

            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _bookService.GetByIdAsync(id);

            if (result == null)
            {
                return NotFound($"Book with id {id} does not exists.");
            }

            return Ok(result);
        }

        [HttpPost("create")]
        public async Task<IActionResult> Add([FromBody] BookEntity entity)
        {
            await _bookService.AddAsync(entity);
            return Ok("Book added successfully.");
        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> Update([FromBody] BookEntity entity, int id)
        {
            if (id != entity.Id)
            {
                return BadRequest("ID in the model does not match the ID in the URL.");
            }

            await _bookService.UpdateAsync(entity);
            return Ok($"Book with id {id} successfully updated.");
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var toDelete = await _bookService.GetByIdAsync(id);

            if (toDelete == null)
            {
                return NotFound($"Book with id {id} does not exists.");
            }

            await _bookService.DeleteAsync(id);
            return Ok($"Book wtih id {id} successfully deleted.");
        }
    }
}
