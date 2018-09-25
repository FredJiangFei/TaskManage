using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Dtos;
using Microsoft.AspNetCore.Mvc;
using TaskManage.API.Data;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;

    public UsersController(IUserRepository userRepository,  IMapper mapper)
    {
        _userRepository = userRepository;
        _mapper = mapper;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(UserForRegisterDto dto)
    {
        var userToCreate = _mapper.Map<User>(dto);
        var result = await _userRepository.Register(userToCreate);
        return Ok(result);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(UserForLoginDto dto)
    {
        var result = await _userRepository.Login(dto.Username, dto.Password);
        return Ok(result);
    }
}