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
public class TaskLinesController : ControllerBase
{
    private readonly ITaskLineRepository _taskLineRepository;
    private readonly IMapper _mapper;
    private readonly IConfiguration _config;

    public TaskLinesController(
        ITaskLineRepository taskLineRepository,
        IMapper mapper,
        IConfiguration config)
    {
        _taskLineRepository = taskLineRepository;
        _mapper = mapper;
        _config = config;
    }

    [HttpPost]
    public async Task<IActionResult> Add(TaskLineAddDto dto)
    { 
        var taskLine = _mapper.Map<TaskLine>(dto);
        var result = await _taskLineRepository.Add(taskLine);
        return Ok(result);
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    { 
        var result = await _taskLineRepository.GetAll();
        var taskLines = _mapper.Map<IEnumerable<TaskLineDto>>(result);
        return Ok(taskLines);
    }
}