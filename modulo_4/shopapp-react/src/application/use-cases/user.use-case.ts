// src/application/use-cases/user.use-case.ts
import type { UserRepository } from '@/domain/ports/user.repository'
import type { UserProfile } from '@/domain/entities/user-profile.entity'
import type { UpdateProfileDto } from '@/application/dtos/update-profile.dto'
import type { ProductStats } from '@/domain/entities/product-stats.entity'

export class UserUseCase {
  [x: string]: any
  private readonly userRepository: UserRepository

    constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
    }
    
  getProfile(): Promise<UserProfile> {
    return this.userRepository.getProfile()
  }

  updateProfile(dto: UpdateProfileDto): Promise<UserProfile> {
    return this.userRepository.updateProfile(dto)
  }
  getStats(): Promise<ProductStats> {
  return this.productRepository.getStats()
}
}
