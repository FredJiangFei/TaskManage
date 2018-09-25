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
public class TasksController : ControllerBase
{
    private readonly ITaskRepository _taskRepository;
    private readonly IMapper _mapper;
    private readonly IConfiguration _config;

    public TasksController(
        ITaskRepository taskRepository,
        IMapper mapper,
        IConfiguration config)
    {
        _taskRepository = taskRepository;
        _mapper = mapper;
        _config = config;
    }

    [HttpPost]
    public async Task<IActionResult> Add(TaskAddDto dto)
    {
        return Ok("result");
    }
}