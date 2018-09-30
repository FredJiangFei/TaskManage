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
using Microsoft.AspNetCore.Authorization;
using System.Linq;

[Route("api/[controller]")]
// [Authorize]
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

    [HttpPut]
    public async Task<IActionResult> Edit(TaskLineEditDto dto)
    {
        var taskLine = _mapper.Map<TaskLine>(dto);
        var result = await _taskLineRepository.Edit(taskLine);
        return Ok(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var line = new TaskLine();
        line.Id = id;
        await _taskLineRepository.Delete(line);
        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var result = await _taskLineRepository.GetAll();
        var taskLines = _mapper.Map<IEnumerable<TaskLineDto>>(result);
        return Ok(taskLines);
    }
}