﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MedicalAppointment.Core.Interfaces
{
    public interface IUnitOfWork:IDisposable
    {
        Task<bool> SaveAsync();
    }
}