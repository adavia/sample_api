class ErrorSerializer
  def self.serialize(errors)
    {
      errors: errors.keys.map { |attribute| {
        field: attribute,
        messages: errors[attribute]
      } }
    }
  end
end