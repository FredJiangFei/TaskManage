using System.Threading.Tasks;
using AutoMapper;
using TaskManage.API.Dtos;
using Microsoft.AspNetCore.Mvc;
using TaskManage.API.Data;
using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.Extensions.Configuration;
using TaskManage.API.Helpers;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly IUserRepository _userRepository;
    private readonly IMapper _mapper;
    private readonly IConfiguration _config;

    public UsersController(
        IUserRepository userRepository,
        IMapper mapper,
        IConfiguration config)
    {
        _userRepository = userRepository;
        _mapper = mapper;
        _config = config;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(UserForRegisterDto dto)
    {
        var userToCreate = _mapper.Map<User>(dto);
        var result = await _userRepository.Register(userToCreate, dto.Password);
        return Ok(result);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(UserForLoginDto dto)
    {
        var result = await _userRepository.Login(dto.Username, dto.Password);
        var token = _config.GetSection("AppSettings:Token").Value;
        var userReturn = _mapper.Map<UserDetailDto>(result);

        return Ok(new
        {
            token = result.GenerateJwtToken(token),
            user = userReturn
        });
    }
}